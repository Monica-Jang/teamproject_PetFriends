package com.tech.petfriends.join.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/join")
public class JoinController {

	@GetMapping("/joinPage")
	public String JoinPage() {
		System.out.println("회원가입 페이지 이동");
		return "/join/joinPage";
	}
	
}
