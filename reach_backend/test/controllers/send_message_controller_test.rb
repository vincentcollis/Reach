require 'test_helper'

class SendMessageControllerTest < ActionDispatch::IntegrationTest
  test "should get reply" do
    get send_message_reply_url
    assert_response :success
  end

end
