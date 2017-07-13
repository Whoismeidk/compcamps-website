import random

print("Guess The Number Game")

MAX = 100000

number = random.randint(1, MAX)


guess = 0
tries = 0
while guess != number:
    tries = tries + 1
    try:
        guess = int(input("Number: "))
    except ValueError:
        print("silly humanitis scum, we mean arabic numbers")
        
    if guess < number:
        print("go up")
    elif guess > number:
        print("go down")

    elif guess == number:
        print ("The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.")
        if tries == 1:
            print("oh shit, already?")
        elif tries > 100:
            print("it took", tries,"tries. you must be new")
        else:
            print ("you used", tries,"tries")
