
import { GetDua } from "@/db/service";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
  const categoryId = params.categoryId;

  let data = await GetDua(categoryId)

  if (!data) {
    return NextResponse.json({ status:'fail', message:'Internal server error' },{status:404});
  }
  return NextResponse.json({status:"success", data:data},{status:200});
}