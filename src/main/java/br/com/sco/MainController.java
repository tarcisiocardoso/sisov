package br.com.sco;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

	@RequestMapping("/ola")
    @ResponseBody
    String home() {
        return "so para ver";
    }
}
