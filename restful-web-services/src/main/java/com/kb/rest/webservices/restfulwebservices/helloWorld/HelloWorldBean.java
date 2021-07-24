package com.kb.rest.webservices.restfulwebservices.helloWorld;

public class HelloWorldBean {

	private String message = "Hello World!";

	public String getMessage() {
		return message;
	}

	public HelloWorldBean(String message) {
		super();
		this.message = message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
