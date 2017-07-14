import random

words = [
    "well",
    "okay",
    "guess",
    "sort",
    "maybe",
    "why",
    "never",
    "cannot",
    "why",
    "smelly",
    "blanks",
    "north",
    "candy",
    "wonder",
    "and",
    "not",
    "man",
    "stop"

]

random.shuffle(words)
word = words[0]
solution = "_" * len(word)
tries = 7 * len(word)

while word != solution and tries != 0:
    print(solution)
    guess = input("Guess a letter: ")


    for i in range(0, len(word)):
        if word[i] == guess:
            solution = list(solution)
            solution[i] = guess
            solution = "".join(solution)
        else:
            tries = tries - 1

        if tries == 0:
            print("Jokes. It was", word)

print("The word was", word)
