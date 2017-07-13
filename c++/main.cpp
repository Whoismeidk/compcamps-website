//cathy this is for you
//remember to validate input/type check 'cuz bug
//i'm doomed to a bad lives interface
#include <iostream>
#include <string>
#include <stdlib.h>
#include <time.h>
using namespace std;

int lives = 2;
int guess;
int number; //make a variable

void levelOne();
void levelTwo();
void levelThree();

int main()
{

  srand (time(NULL));




  levelOne();

  return 0;

   //lives = -1


  //guess > number
  // High chances; RNG Sucks


}

bool guessing(int number)
{
  cout << "Odds are you'll get XCOM'd. Can you get the 1 in 100`? :)" << endl;
  cout << "Fails available:" << lives << endl;
  cin >> guess;

    do{
      if (guess > number) {
        cout << "High chances; RNG Sucks (number too high)" << endl;
        cout << "Fails available:" << lives << endl;
        cin >> guess;
      lives--;
      }

  //guess < number
  // Low chances; get aim boosters

      if (guess < number) {
        cout << "Low chances; get aim boosters (number too low)" << endl;
        cout << "Fails available:" << lives << endl;
        cin >> guess;
        lives--;
      }
  //AMERICA, FUCK YOU RNG
  // we win

      if (guess == number) {
        cout << "congrats :(" << endl;
        return true;
      }
    } while(lives > 0);

    cout << "sit down you peasant scum" << endl;
    return false;


}

void levelOne()
{
  cout << "Welcome to the Meme Zone." << endl;
  cout << "I am thinking of a number between 1-10." << endl;

  number = rand() % 10 + 1; //make something between 1-10
  cout << number;
  if (guessing(number)) {
    lives = lives + 2;
    levelTwo();
  }

}

void levelTwo()
{
  cout << "Welcome to heaven." << endl;
  cout << "I am thinking of a number between 1-15." << endl;
  number = rand() % 15 + 1; // generating a random seed between 1-15
  if (guessing(number)) {
    cout << "WOOOOOOOOOOOAH AAAAAAAAAAAAAAAAAAAAH WOOOOOOOOOOOOOOOO" << endl;
  }
}
//box gives the big thing string=word double = fraction int = inties
