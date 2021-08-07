# If you're given a list with a bunch of numbers and you're supposed to sort the numbers (with the smallest number on the left and the largest number on the right), how would you do this? There are numerous sorting algorithms to sort numbers in the list. We'll introduce one of the simplest sorting algorithm called selection sort.

# Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1.

def selection_sort(arr):
    for i in range(len(arr)):
        min1 = arr[0]
        if arr[i] < min1:
            min1 = arr[i]
            arr[i], arr[0] = arr[0], min1
        for j in range(1, len(arr)):
            min2 = arr[1]
            if arr[j] < min2:
                min2 = arr[j]
                arr[j], arr[1] = arr[1], min2
            for k in range(2, len(arr)):
                min3 = arr[2]
                if arr[k] < min3:
                    min3 = arr[k]
                    arr[k], arr[2] = arr[2], min3
                for l in range(3, len(arr)):
                    min4 = arr[3]
                    if arr[l] < min4:
                        min4 = arr[l]
                        arr[l], arr[3] = arr[3], min4
                    for m in range(4, len(arr)):
                        min5 = arr[4]
                        if arr[m] < min5:
                            min5 = arr[m]
                            arr[m], arr[4] = arr[4], min5
                        for n in range(5, len(arr)):
                            min6 = arr[5]
                            if arr[n] < min6:
                                min6 = arr[n]
                                arr[n], arr[5] = arr[5], min6
                            for o in range(6, len(arr)):
                                min7 = arr[6]
                                if arr[o] < min7:
                                    min7 = arr[o]
                                    arr[o], arr[6] = arr[6], min7
                                for p in range(7, len(arr)):
                                    min8 = arr[7]
                                    if arr[p] < min8:
                                        min8 = arr[p]
                                        arr[p], arr[7] = arr[7], min8
                                    for q in range(8, len(arr)):
                                        min9 = arr[8]
                                        if arr[q] < min9:
                                            min9 = arr[q]
                                            arr[q], arr[8] = arr[8], min9
    return arr
print(selection_sort([7,4,9,6,5,1,0,2,8,3]))