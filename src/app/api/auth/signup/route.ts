import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { username, password, email, first_name, last_name, phone } =
      await req.json();

    // Проверяем, существует ли пользователь с таким email или username
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message:
            "Пользователь с таким email или именем пользователя уже существует",
        },
        { status: 400 }
      );
    }

    // Хешируем пароль
    const hashedPassword = await hash(password, 12);

    // Создаем нового пользователя
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        first_name,
        last_name,
        phone,
      },
    });

    // Удаляем пароль из ответа
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "Пользователь успешно зарегистрирован",
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    return NextResponse.json(
      { message: "Произошла ошибка при регистрации" },
      { status: 500 }
    );
  }
}
