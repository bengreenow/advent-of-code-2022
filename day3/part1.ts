import fs from "fs";

const getPriority = (x: string) => {
    // why make it more complicated than it needs to be?
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = alphabet.indexOf(x);
    return index === -1 ? null : index + 1;
};
let totalPriority = 0;
fs.readFile("input.txt", "utf-8", (_, data) => {
    const lines = data.split("\n");
    lines.forEach((input) => {
        const firstHalf = input.slice(0, input.length / 2);
        const secondHalf = input.slice(input.length / 2);
        const firstItemToIndexMap = new Map<string, number>();

        firstHalf.split("").forEach((item, index) => {
            firstItemToIndexMap.set(item, index);
        });

        const commonItem = secondHalf
            .split("")
            .find((item) => firstItemToIndexMap.get(item) !== undefined);

        if (!commonItem) {
            console.log("no common item");
            return;
        }
        const priority = getPriority(commonItem);
        if (!priority) {
            console.log("no priority");
            return;
        }
        totalPriority += priority ?? 0;
    });
    console.log(totalPriority);
});
