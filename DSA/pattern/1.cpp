#include <bits/stdc++.h>
using namespace std;

int main()
{
    for (int row = 0; row <= 6; row++)
    {
        for (int col = 0; col < 6 - row; col++)
        {
            cout << " ";
        }

        for (int col = 0; col < row + 1; col++)
        {
            cout << "* ";
        }

        cout << endl;
    }

    return 0;
}