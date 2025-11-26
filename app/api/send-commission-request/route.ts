// app/api/send-commission-request/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { ime, email, opis, materijal, boja, datoteka } = await req.json();

    const htmlContent = `
      <h2>Nova 3D narudžba po mjeri</h2>
      <p><strong>Ime:</strong> ${ime}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Opis projekta:</strong> ${opis}</p>
      <p><strong>Materijal:</strong> ${materijal}</p>
      <p><strong>Boja:</strong> ${boja}</p>
      <p><strong>Link na datoteku:</strong> <a href="${datoteka}">${datoteka}</a></p>
    `;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "trycaze@proton.me",
      subject: `Nova 3D narudžba: ${ime}`,
      html: htmlContent,
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send commission request" },
      { status: 500 },
    );
  }
}
