import { NextResponse } from "next/server";
import { conn } from "../../../libs/mysql";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM product");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const {
      name,
      zona,
      usoMedicinal,
      contraindicacion,
      afecciones,
      description,
      nombreCientifico,
      image,
    } = await request.json();
    const result = await conn.query("INSERT INTO product SET ?", {
      name,
      zona,
      usoMedicinal,
      contraindicacion,
      afecciones,
      description,
      nombreCientifico,
      image,
    });

    return NextResponse.json({
      name,
      zona,
      usoMedicinal,
      contraindicacion,
      afecciones,
      description,
      nombreCientifico,
      image,
      id: result.insertId,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
