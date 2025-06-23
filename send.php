<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    exit('Only POST requests are allowed');
}

// Validate input
$subject = $_POST['subject'] ?? '';
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$company = $_POST['company'] ?? '';

// if exists
$websites = $digital = $automation = $creator = 'false';
if (isset($_POST['websites'])) {
    $websites = 'true';
}
if (isset($_POST['digital'])) {
    $digital = 'true';
}
if (isset($_POST['automation'])) {
    $automation = 'true';
}
if (isset($_POST['creator'])) {
    $creator = 'true';
}

$messageTemp = $_POST['message'] ?? '';

 // const emailMessage = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nWebsites: ${websites}\nDigital: ${digital}\nAutomation: ${automation}\nCreator: ${creator}`
$htmlMessage = "<p><strong>Name:</strong> $name</p>
                <p><strong>Company:</strong> $company</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Message:</strong> $messageTemp</p>
                <p><strong>Websites:</strong> $websites</p>
                <p><strong>Digital:</strong> $digital</p>
                <p><strong>Automation:</strong> $automation</p>
                <p><strong>Creator:</strong> $creator</p>";

$message = wordwrap($htmlMessage, 70);

if (empty($subject) || empty($message)) {
    http_response_code(400);
    exit('Missing required fields.');
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 0;  // Change to 2 to enable debug output
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'admin@sihonegroup.com';
    $mail->Password   = 'jxikzlxppihcqsmm'; // Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('website@sihonegroup.com', 'Sihone Contact Form');
    $mail->addAddress('contact@sihonestudio.com');
    $mail->addAddress('austin.takam@sihonegroup.com');
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlMessage;
    $mail->AltBody = $message;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    error_log("Mailer Error: {$mail->ErrorInfo}");
    echo "Mailer Error: {$mail->ErrorInfo}";
    echo "Message could not be sent. Please try again later.";
}
