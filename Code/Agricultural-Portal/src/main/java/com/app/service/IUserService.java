package com.app.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.app.dto.CategoryDTO;
import com.app.dto.ProductFeedDTO;
import com.app.dto.SellerCompDTO;
import com.app.dto.SignupRequest;
import com.app.dto.UserResponse;
import com.app.dto.WishlistDTO;
import com.app.enums.SellerStatus;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.User;
import com.app.pojos.Wishlist;

public interface IUserService {
//	User authenticateUser(String email, String password);
	User saveUser(SignupRequest signupRequest);
	
	Seller findSellerByBuisenessName(String name);
	
	List<Product> findProductsByCategory(String categoryName);
	List<User> getAllCustomer();
	Category addCategory(CategoryDTO catDTO);
	
	Category editCategory(int categoryId, CategoryDTO catDTO);
	
	String deleteCategory(int categoryId);
	
	String changeSellerAccountStatus(int id,SellerStatus status);
	
	List<Category> getAllCategories();
	
	List<Seller> getAllSeller();
	
	String editProfile(UserResponse user);
	
	String userSignup(UserResponse user);

	List<Wishlist> readWishList(int user_id);
	
	WishlistDTO getWishlistDTO(Product product);

	Wishlist createWishlist(Wishlist wishList);
	
	List<Seller> getSellerByArea(String pincode);
	
	UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

	String addFeedback(ProductFeedDTO productFeedbackDto, int productId);

	String addComplaint(SellerCompDTO sellerComplaintDto, int productId);
}
