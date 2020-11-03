# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
 

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false
# Example 4:

# Input: s = "([)]"
# Output: false
# Example 5:

# Input: s = "{[]}"
# Output: true
 

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.



def isValid(s):
    if len(s) > 10000:
        return False
    rules = {
    "(": ")",
    "[":"]",
    "{":"}"
    }
    opening = "({["
    temp = ""
    for i in range (len(s)) :
        if s[i] in opening:
            temp=temp+s[i]
        else:
            if not temp :
                return False
            else:
                if rules.get(temp[-1])== s[i]:
                    temp=temp[:-1]
                else:
                    return False
    if not temp:
        return True
    else:
        return False

# print(isValid("([])"))
 
#---------------------------------------------------------------------------------------------------------------------------------------

# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

# Follow up: Could you solve it without converting the integer to a string?

 

# Example 1:

# Input: x = 121
# Output: true
# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
# Example 4:

# Input: x = -101
# Output: false
 

# Constraints:

# -231 <= x <= 231 - 1

def isPalindrome(x):
    if x > pow(2,31)-1 or x < 0 :
        return False
    temp = x
    rev = 0 
    while x!=0:
        rev = rev*10 + x%10
        x=x//10
    if rev == temp :
        return True
    else :
        return False


print (isPalindrome(1551))

