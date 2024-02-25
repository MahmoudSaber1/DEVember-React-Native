import { Link } from "expo-router";
import { Button } from "react-native";

const LinkItem = ({ day, btnName, href }: { day: string | string[] | undefined; btnName: string; href: string }) => {
    return (
        day && (
            <Link
                href={`/day/${href}`}
                asChild>
                <Button title={btnName} />
            </Link>
        )
    );
};

export default LinkItem;
