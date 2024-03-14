class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {

        $resultArr = [];

        for ($i = 0; $i < count($nums) - 1; $i++) {
            $resultArr = $this->getResultArr($i, $nums, $target);

            if (count($resultArr) > 0) {
                break;
            }
        }

        return $resultArr;
    }

    private function getResultArr($i, $filteredNumbers, $target): array
    {
        $resultArr = [];
        foreach ($filteredNumbers as $key => $num) {
            if($filteredNumbers[$i] + $filteredNumbers[$key] === $target && $i !== $key) {
                $resultArr[] = $i;
                $resultArr[] = $key;
                break;
            }
        }
        return $resultArr;
    }
}