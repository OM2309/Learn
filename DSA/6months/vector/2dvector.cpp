#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<vector<int>> arr; // first vector is outer vector second vector is inner vector

    vector<int> a{1, 2, 3};
    vector<int> b{4, 5, 6};
    vector<int> c{7, 8, 9};

    arr.push_back(a);
    arr.push_back(b);
    arr.push_back(c);

    for (int i = 0; i < arr.size(); i++) // if i want to print no. of rows then i want to use this funtion for arr.size()
    {
        for (int j = 0; j < arr[i].size(); j++)
        {
            cout << arr[i][j] << " ";
        }

        cout << endl;
    }

    return 0;
}
