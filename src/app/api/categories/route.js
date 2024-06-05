
import { GetAllCategory } from "@/db/service";
import { NextResponse } from "next/server";

export async function GET(request) {
  let data = await GetAllCategory()

  if (!data) {
    return NextResponse.json({ status:'fail', message:'Internal server error' },{status:404});
  }
  return NextResponse.json({status:"success", data:data},{status:200});
}