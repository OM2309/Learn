// #include <bits/stdc++.h>
// using namespace std;

// int findUnique(vector<int> arr)
// {
//     int ans = 0;
//     for (int i = 0; i < arr.size(); i++)
//     {
//         ans = ans ^ arr[i];
//     }
//     return ans;
// }

// int main()
// {
//     int n;
//     cout << "Enter the size of array: ";
//     cin >> n;
//     vector<int> arr(n);

//     cout << "Enter " << n << " elements: " << endl;

//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i]; // Read array elements
//     }

//     int uniqueElement = findUnique(arr);
//     cout << "Unique element is: " << uniqueElement << endl;

//     return 0;
// }



// Input A,   Input B,       A XOR B
// 0,          0,               0
// 0,          1,               1
// 1,          0,               1
// 1,          1,               0