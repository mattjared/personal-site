import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE ContactForms ( Name varchar(255), Email varchar(255), Message varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// export async function GET(request: Request) {
//   try {
//     const result =
//       await sql`ALTER TABLE ContactForms ADD COLUMN created_at TIMESTAMP DEFAULT NOW(); `;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
