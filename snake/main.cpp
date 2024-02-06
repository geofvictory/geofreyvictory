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
}

void Draw() {

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