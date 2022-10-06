
class Solution {

public:
    int lengthOfLongestSubstring(std::string str) {
        
        if (str.length() == 0)
            return 0;

        int left = 0;  int right = 0;

        std::map<char, int> m;
        int maximum = 1;
        int len = 0;

        for(left ; left < str.length() ; left++)
        {
            // std::cout << "left : " << left << "\n";
            for (right = left; right < str.length(); right++)
            {

                if ( m.count( str[right]) == true )
                {
                    maximum = std::max(len, maximum);
                    len = 0;
                    m.clear();
                    break;
                }
                else
                {
                    len++;
                    m.insert(std::pair<char, int>(str[right], right));
                }
            }
        }
        return maximum;
    }
};
