package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("port 3000")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		fmt.Println(w, "hello")
	})

	http.ListenAndServe(":5500", nil)
}
