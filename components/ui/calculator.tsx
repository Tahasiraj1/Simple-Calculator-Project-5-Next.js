"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState<string>("");

    const handleButtonClick = (value: string): void => {
        setDisplayValue(displayValue + value);
    };

    const calculateResult = (): void => {
        try {
            setDisplayValue(eval(displayValue).toString());
        } catch (error) {
            setDisplayValue("Error");
        }
    };

    const clearDisplay = (): void => {
        setDisplayValue("");
    };

    const deleteLastCharacter = (): void => {
        setDisplayValue(displayValue.slice(0, -1));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
            <Card className="w-80 p-4 bg-black rounded-lg shadow-2xl">
                <div className="text-white text-right text-3xl font-light mb-4 h-16">
                    {displayValue || "0"}
                </div>
                <CardContent className="grid grid-cols-4 gap-2">
                    {/* Row 1 */}
                    <Button
                    className="bg-gray-700 text-white text-xl rounded-full"
                    onClick={clearDisplay}
                    >
                        AC
                    </Button>
                    <Button
                    className="bg-gray-700 text-white text-xl rounded-full"
                    onClick={deleteLastCharacter}
                    >
                        DEL
                    </Button>
                    <Button
                    className="bg-gray-700 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("%")}
                    >
                        %
                    </Button>
                    <Button
                    className="bg-orange-500 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("/")}
                    >
                        ÷
                    </Button>

                    {/* Row 2 */}
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("7")}
                    >
                        7
                    </Button>
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("8")}
                    >
                        8
                    </Button>
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("9")}
                    >
                        9
                    </Button>
                    <Button
                    className="bg-orange-500 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("*")}
                    >
                        ×
                    </Button>

                    {/* Row 3 */}

                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("4")}
                    >
                        4
                    </Button>
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("5")}
                    >
                        5
                    </Button>
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("6")}
                    >
                        6
                    </Button>
                    <Button
                    className="bg-orange-500 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("-")}
                    >
                        −
                    </Button>

                    {/* Row 4 */}
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("1")}
                    >
                        1
                    </Button>
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("2")}
                    >
                        2
                    </Button>
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("3")}
                    >
                        3
                    </Button>
                    <Button
                    className="bg-orange-500 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick("+")}
                    >
                        +
                    </Button>

                    {/* Row 5 */}
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full col-span-2"
                    onClick={() => handleButtonClick("0")}
                    >
                        0
                    </Button>
                    <Button
                    className="bg-gray-800 text-white text-xl rounded-full"
                    onClick={() => handleButtonClick(".")}
                    >
                        .
                    </Button>
                    <Button
                    className="bg-orange-500 text-white text-xl rounded-full"
                    onClick={calculateResult}
                    >
                        =
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}