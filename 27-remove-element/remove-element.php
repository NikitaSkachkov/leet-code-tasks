class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {

        foreach (array_keys($nums, $val) as $key) {
            unset($nums[$key]);
        }
        
        return count($nums);

    }
}