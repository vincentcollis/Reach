require 'test_helper'

class SendmessageControllerTest < ActionDispatch::IntegrationTest
  test "should get reply" do
    get sendmessage_reply_url
    assert_response :success
  end

end
