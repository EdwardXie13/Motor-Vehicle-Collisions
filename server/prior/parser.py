Accident = []
file = open("AccidentSL.csv", "r")
Accident = file.readlines()
file.close()

Accident = Accident[1:]

for x in Accident:
  original = x
  x = x.split(',')
  x = x[1].split('/')
  date = x[0] + '-' + x[1] + '-' + x[2]
  original = original.split(',')
  original[1] = date

  #print(original)
  data = original[0] + ',' + original[1] + ',' + original[2] + ',' +\
         original[3] + ',' + original[4] + ',' + original[5] + ',' +\
         original[6]

  print(data)
