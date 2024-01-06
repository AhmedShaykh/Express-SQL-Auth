import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface Payload {
    userId: number;
    email: string;
    name: string;
    username: string;
};

class Authentication {

    public static passwordHash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    };

    public static async passwordCompare(
        text: string,
        encryptedText: string
    ): Promise<boolean> {
        return await bcrypt.compare(text, encryptedText);
    };

    public static generateToken(
        id: number,
        email: string,
        name: string,
        username: string
    ): string {

        const secretKey: string = process.env.JWT_SECRET || "my-secret";

        const payload: Payload = {
            userId: id,
            email: email,
            name: name,
            username: username
        };

        const option = { expiresIn: process.env.JWT_EXPIRES };

        return jwt.sign(payload, secretKey, option);
    };

    public static validateToken(token: string): Payload | null {

        try {

            const secretKey: string = process.env.JWT_SECRET || "my-secret";

            return jwt.verify(token, secretKey) as Payload;

        } catch (err) {

            return null;
        }
    };
};

export default Authentication;