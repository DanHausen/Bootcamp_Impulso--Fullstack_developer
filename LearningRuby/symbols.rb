#Its a special type of object. They are create with ":" in the beginning of the identifier
#They are immutable
#Great to substitute Strings for labels and keys and hash

name = 'Dan'
p name.object_id #Its different every time it is set


:"Dan"
p :Dan.object_id #its always the same id on memory, and that makes it very useful for identifications