#include <iostream>
using namespace std;
bool GameOver;
const int width = 20;
const int height = 20;
int x, y, fruitX, fruitY, score;
enum eDirecton { STOP = 0, LEFT, RIGHT, UP, DOWN};
eDirecton dir;

// FUNCTIONS

void Setup() {
    GameOver = false;
    dir = STOP;
    x = width / 2;
    y = height / 2;
    fruit = x rand() % width;
    fruit = y rand() % height;
    score = 0;
}

void Draw() {
    system("cls");
    for (int i = 0; i < width; i++)
        cout << "#";
    cout << endl;

    for (int i = 0; i < width; i++)
        cout << "#";
}

void Input() {

}

void Logic() {

}

// MAIN

int main() {
    Setup();
    while (!GameOver)
        {
            Draw();
            Input();
            Logic();
        }
    return 0;
}