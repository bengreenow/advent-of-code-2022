

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


print(biggest)

