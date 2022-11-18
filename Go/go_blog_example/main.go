package main

const pi = 3.1415

func main() {

	printCircleArea(2)
	printCircleArea(4)

}

func printCircleArea(radius int) float32 {
	//var circleRadius = 2
	return float32(radius) * float32(radius) * pi
	//fmt.Println(circleArea)
	circleArea = printCircleArea
	fmt.println(circleArea)
}
