def vowel_2_index(string):
    switched_string = ''
    position_in_string = 0
    vowels = set('aeiouAEIOU')
    for letter in string:
        position_in_string += 1
        if any((v in vowels) for v in letter):
            switched_string += str(position_in_string)
        else:
            switched_string += letter
    return switched_string

#vowel_2_index('this is my string') #== 'th3s 6s my str15ng'
print(vowel_2_index('this is my string')) #== 'th3s 6s my str15ng'
print(vowel_2_index('Codewars is the best site in the world')) #,'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld')
