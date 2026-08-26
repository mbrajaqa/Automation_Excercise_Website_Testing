Feature: Login Functionality
    Scenario : Login with correct email and password
        Given User is on login page
        When User login correct email "testuser24aug26@test.com" and password "testuser"
        Then Homepage displayed with username "Test User"