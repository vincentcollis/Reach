require 'test_helper'

class VotersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @voter = voters(:one)
  end

  test "should get index" do
    get voters_url, as: :json
    assert_response :success
  end

  test "should create voter" do
    assert_difference('Voter.count') do
      post voters_url, params: { voter: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show voter" do
    get voter_url(@voter), as: :json
    assert_response :success
  end

  test "should update voter" do
    patch voter_url(@voter), params: { voter: {  } }, as: :json
    assert_response 200
  end

  test "should destroy voter" do
    assert_difference('Voter.count', -1) do
      delete voter_url(@voter), as: :json
    end

    assert_response 204
  end
end
