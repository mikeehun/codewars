def switch_dict(dic):
    result = {}
    for key, value in dic.items():
        if value in result:
            result[value].append(key)
        else:
            result[value] = [key]
        print(result)
    return result


# before = {
#           'Ice': 'Cream',
#           'Age': '21',
#           'Light': 'Cream',
#           'Double': 'Cream'
#           }
#
# expected_ans = {
#                 'Cream': ['Ice', 'Double', 'Light'],
#                 '21': ['Age']
#                 }
#

example_dic = {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'}
switch_dict(example_dic)
