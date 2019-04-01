package com.razor.foodtruck.requests;

import com.razor.foodtruck.models.Friend;
import lombok.Data;

import java.util.Set;

@Data
public class FriendResponse {
    private Long id;
    private Boolean friendStatus;

    public FriendResponse(Long id) {
        this.id = id;
    }
}
