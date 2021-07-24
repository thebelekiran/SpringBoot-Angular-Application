package com.kb.rest.basic.auth;

public class AuthenticationBean {

	private String message = "Hello World!";

	public String getMessage() {
		return message;
	}

	public AuthenticationBean(String message) {
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
