package com.tech.petfriends.mypage.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.tech.petfriends.admin.dto.CouponDto;
import com.tech.petfriends.login.dto.MemberAddressDto;
import com.tech.petfriends.login.dto.MemberLoginDto;
import com.tech.petfriends.mypage.dto.MyCartDto;
import com.tech.petfriends.mypage.dto.MyOrderDto;
import com.tech.petfriends.mypage.dto.MyPetDto;
import com.tech.petfriends.mypage.dto.MyWishDto;

@Mapper
public interface MypageDao {
	void insertMyPet(MyPetDto pet);
	
	// 펫 이미지 삭제
	void deletePetImgForPetCode(String petCode);
	
	// 펫 전체 리스트 가져오기
	ArrayList<MyPetDto> getPetList();
	
	// 펫코드로 이미지 가져오기
	String getPetImgForPetCode(String petCode);

	ArrayList<MyPetDto> getPetsByMemberCode(String mem_code);

	void removeMainPet(String mem_code);

	void setMainPet(String newlyChecked);
	
	ArrayList<String> getBreedOptionByType(String petType);

	void insertPet(MyPetDto myPetDto);
	
	MyPetDto getInfoByPetCode(String petCode);
	
	void modifyPetByPetCode(MyPetDto myPetDto);
	
	void deletePetByPetCode(String petCode);
	
	ArrayList<CouponDto> getAllCoupon();

	ArrayList<CouponDto> getCouponByMemberCode(String mem_code);

	CouponDto searchCouponByKeyword(String keyword);
	
	int checkIssued(String mem_code, int cp_no);

	void insertCouponByCouponNo(String mc_code, String mem_code, int cp_no);

	ArrayList<MemberAddressDto> getAddrByMemberCode(String mem_code);

	void updatePhoneNumber(String memCode, String phoneNumber);
	
	void updateDefaultAddress(String memCode);

	void setMainAddress(String addrCode);

	void deleteAddress(String addrCode);
	
	boolean insertNewAddress(String addrCode, String memCode, String addrPostal, String addrLine1, String addrLine2);

	void updateMemberInfo(MemberLoginDto loginUser);
	
	List<MyCartDto> getCartByMemberCode(String mem_code);
	
	void deleteAllCartItems(String mem_code);
	
	boolean updateCartQuantity(String newQuantity, String cartCode);
	
	List<MyCartDto> getItemByCartCode(String cartCode);
	
	void deleteCartItem(String cartCode);
	
	List<MyCartDto> getItemsByCartCodes(List<String> cartCodes);

	ArrayList<MyWishDto> getAllWishInfoByMemberCode(String mem_code, String sortType);
	
	List<MyOrderDto> getAllOrderInfoByMemberCode(String mem_code, String orderable);
	
	void deleteWishByProCode(String mem_code, String pro_code);
}
