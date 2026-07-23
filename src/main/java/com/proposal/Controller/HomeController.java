package com.proposal.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/prank")
    public String prank() {
        return "prank";
    }

    @GetMapping("/reveal")
    public String reveal() {
        return "reveal";
    }

    @GetMapping("/proposal")
    public String proposal() {
        return "proposal";
    }

    @GetMapping("/success")
    public String success() {
        return "success";
    }
}
