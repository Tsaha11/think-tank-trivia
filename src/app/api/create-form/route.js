import mongoose from "mongoose";
import Questions from "@/models/question/questionSchema";
import Forms from "../../../models/form/formSchema";
import Users from "@/models/user/userSchema";
import { NextResponse } from "next/server";
export async function POST(request) {
    // console.log(res.params.id);
    try {
        mongoose.connect(process.env.MONGO_URL);
        const { data, user_id, form_name } = await request.json();
        let userDoc = await Users.findById(user_id);
        if(!userDoc){
            return NextResponse.json({ ok: false, message: "user not found" },{status:400});   
        }
        let questions = [];
        for (let iter of data) {
            let it = iter.value;
            let questDoc;
            if (it.type == "TEXT") {
                questDoc = new Questions({ owner: user_id, ques_type: it.type, question: it.question });
            }
            else {
                questDoc = new Questions({ owner: user_id, ques_type: it.type, question: it.question, a: it.a, b: it.b, c: it.c, d: it.d });
            }
            await questDoc.save();
            questions.push(questDoc._id);
        }
        let formDoc = new Forms({ owner: user_id, form_name: form_name, questions: questions });
        await formDoc.save();
        userDoc.forms.push(formDoc._id);
        await userDoc.save();
        // console.log("payload form server : ", payload);
        return NextResponse.json({ ok: true, message: "form added" },{status:200});
    }
    catch(err){
        return NextResponse.json({ ok: false, message: err.message },{status:500});   
    }

}