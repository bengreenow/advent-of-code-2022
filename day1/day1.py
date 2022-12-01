acc = 0
elfTotals = []
biggest = 0

for x in open('./data.txt'):
    if x == '\n':
        elfTotals.append(acc)
        if acc > biggest:
            biggest = acc
        acc = 0
        continue
    acc += int(x)

elfTotals.sort(reverse=True)
top3 = elfTotals[:3]

top3Total = 0
for x in top3:
    top3Total += x
print(top3Total)

