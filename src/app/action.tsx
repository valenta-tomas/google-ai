"use server";
import { cookies } from "next/headers";
export async function submitForm(formData: any) {
  console.log(formData)
  console.log(formData.get("Ahoj"))
  cookies().set('test', formData.get("Ahoj"))
  }