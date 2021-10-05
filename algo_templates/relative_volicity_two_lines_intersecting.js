// You are given two kangaroos each on a line that will jump in the positive direction. The first kangaroo starts at location x1 and moves at a rate of v1 per jump. The second kangaroo starts at location x2 and moves at a rate of v2 per jump. If there is a way to get both kangaroos at the same location at the same time, return "YES". Otherwise return "NO".

function kangaroo(x1, v1, x2, v2) {
        if (v1 > v2) {
            let remainder = (x1 - x2) % (v2 - v1);    
            if (remainder == 0) {
                return "YES";
            }
        }
        return "NO";
    }