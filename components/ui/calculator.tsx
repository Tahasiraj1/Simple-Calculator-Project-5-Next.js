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
            const result = eval(displayValue);
            if (result === Infinity || result === -Infinity) {
                throw new Error("Divide by zero");
            }
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue("Invalid Input");
            setTimeout(() => setDisplayValue(""), 1500);
        }
    };

    const clearDisplay = (): void => {
        setDisplayValue("");
    };

    const deleteLastCharacter = (): void => {
        setDisplayValue(displayValue.slice(0, -1));
    };

    const buttonClass = "bg-sky-950 text-white text-xl rounded-full hover:bg-blue-800 active:bg-blue-900";
    const orangeButtonClass = "bg-orange-500 text-white text-xl rounded-full hover:bg-orange-600 active:bg-orange-500";

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
            <Card className="w-80 p-4 bg-black rounded-lg shadow-2xl shadow-gray-600">
                <div className="flex items-center justify-end text-white text-right text-3xl font-light mb-4 h-16 overflow-hidden">
                    {displayValue || "0"}
                </div>
                <CardContent className="grid grid-cols-4 gap-2">
                    {/* Row 1 */}
                    <Button
                    className={`${buttonClass}`}
                    onClick={clearDisplay}
                    >
                        AC
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={deleteLastCharacter}
                    >
                        DEL
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("%")}
                    >
                        %
                    </Button>
                    <Button
                    className={`${orangeButtonClass}`}
                    onClick={() => handleButtonClick("/")}
                    >
                        ÷
                    </Button>

                    {/* Row 2 */}
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("7")}
                    >
                        7
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("8")}
                    >
                        8
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("9")}
                    >
                        9
                    </Button>
                    <Button
                    className={`${orangeButtonClass}`}
                    onClick={() => handleButtonClick("*")}
                    >
                        ×
                    </Button>

                    {/* Row 3 */}

                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("4")}
                    >
                        4
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("5")}
                    >
                        5
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("6")}
                    >
                        6
                    </Button>
                    <Button
                    className={`${orangeButtonClass}`}
                    onClick={() => handleButtonClick("-")}
                    >
                        −
                    </Button>

                    {/* Row 4 */}
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("1")}
                    >
                        1
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("2")}
                    >
                        2
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick("3")}
                    >
                        3
                    </Button>
                    <Button
                    className={`${orangeButtonClass}`}
                    onClick={() => handleButtonClick("+")}
                    >
                        +
                    </Button>

                    {/* Row 5 */}
                    <Button
                    className={`${buttonClass} col-span-2`}
                    onClick={() => handleButtonClick("0")}
                    >
                        0
                    </Button>
                    <Button
                    className={`${buttonClass}`}
                    onClick={() => handleButtonClick(".")}
                    >
                        .
                    </Button>
                    <Button
                    className={`${orangeButtonClass}`}
                    onClick={calculateResult}
                    >
                        =
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
