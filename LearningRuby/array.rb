#It is a list of value separated by commas

list = [1,2,"3"]
p list.empty?
p list.last
p list.length
list << 88
list.append("Oi")
p list.length
p list[3]
p list[4]
p list.last
p list.first

list2 = [55,2,4]
resultado = list + list2
p resultado