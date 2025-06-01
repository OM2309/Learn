#include <iostream>
#include <stack>
using namespace std;

int main()
{
    stack<int> st;

    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);

    // remove
    st.pop();

    cout << "Element on top is " << st.top() << endl;

    // size
    cout << "Element on top is " << st.size() << endl;

    return 0;
}