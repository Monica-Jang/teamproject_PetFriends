package com.tech.petfriends.admin.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.tech.petfriends.admin.dto.ACommunityDto;
import com.tech.petfriends.admin.mapper.AdminCommuntiyDao;
import com.tech.petfriends.admin.mapper.AdminPageDao;
import com.tech.petfriends.admin.service.AdminCommunityBListService;
import com.tech.petfriends.admin.service.AdminPethotelDataService;
import com.tech.petfriends.admin.service.AdminPethotelInfoData;
import com.tech.petfriends.admin.service.AdminPethotelInfoEditService;
import com.tech.petfriends.admin.service.AdminPethotelIntroData;
import com.tech.petfriends.admin.service.AdminPethotelIntroEditService;
import com.tech.petfriends.admin.service.AdminPethotelReserveDetailService;
import com.tech.petfriends.admin.service.AdminPethotelReserveUpdateService;
import com.tech.petfriends.admin.service.AdminPetteacherDataService;
import com.tech.petfriends.admin.service.AdminPetteacherDeleteService;
import com.tech.petfriends.admin.service.AdminPetteacherDetailService;
import com.tech.petfriends.admin.service.AdminPetteacherEditService;
import com.tech.petfriends.admin.service.AdminPetteacherWriteService;
import com.tech.petfriends.admin.service.AdminServiceInterface;
import com.tech.petfriends.community.dto.CReportDto;
import com.tech.petfriends.community.service.CReportService;
import com.tech.petfriends.helppetf.dto.PethotelInfoDto;
import com.tech.petfriends.helppetf.dto.PethotelIntroDto;
import com.tech.petfriends.helppetf.dto.PethotelMemDataDto;
import com.tech.petfriends.helppetf.dto.PetteacherDto;
import com.tech.petfriends.notice.dao.NoticeDao;
import com.tech.petfriends.notice.dto.EventDto;
import com.tech.petfriends.notice.dto.NoticeDto;

@RestController
@RequestMapping("/admin")
public class AdminRestController {

	@Autowired
	AdminPageDao adminDao;

	@Autowired
	NoticeDao noticeDao;

	@Autowired
	AdminCommuntiyDao CommuntiyDao;

	AdminServiceInterface adminServiceInterface;

	@PostMapping("/pethotel_reserve_update")
	public String pethotelReserveUpdate(@RequestBody Map<String, String> statusMap, HttpServletRequest request,
			Model model) {
		model.addAttribute("statusMap", statusMap);
		model.addAttribute("request", request);

		adminServiceInterface = new AdminPethotelReserveUpdateService(adminDao);
		adminServiceInterface.execute(model);
		return "{\"status\": \"success\"}";
	}

	@GetMapping("/pethotel_admin_reserve_detail")
	public String pethotelReserveDetail(HttpServletRequest request, Model model) throws JsonProcessingException {
		AdminPethotelReserveDetailService adminService = new AdminPethotelReserveDetailService(adminDao);
		return adminService.execute(model, request);
	}

	@GetMapping("/pethotel_admin_reserve")
	public ArrayList<PethotelMemDataDto> pethotelReserveData(HttpServletRequest request, Model model) {
		model.addAttribute("request", request);
		adminServiceInterface = new AdminPethotelDataService(adminDao);
		adminServiceInterface.execute(model);

		@SuppressWarnings("unchecked")
		ArrayList<PethotelMemDataDto> memSelectDto = (ArrayList<PethotelMemDataDto>) model.getAttribute("memSelectDto");

		return memSelectDto;
	}

	@GetMapping("/petteacher_admin_data")
	public List<PetteacherDto> getPetteacherData(HttpServletRequest request, Model model) {
		model.addAttribute("request", request);
		adminServiceInterface = new AdminPetteacherDataService(adminDao);
		adminServiceInterface.execute(model);

		@SuppressWarnings("unchecked")
		List<PetteacherDto> petteacherList = (List<PetteacherDto>) model.getAttribute("petteacherList");

		return petteacherList;
	}

	@GetMapping("/petteacher_admin_data_forEdit")
	public PetteacherDto petteacherDataForEdit(HttpServletRequest request, Model model) {
		model.addAttribute("request", request);
		adminServiceInterface = new AdminPetteacherDetailService(adminDao);
		adminServiceInterface.execute(model);

		PetteacherDto dto = (PetteacherDto) model.getAttribute("dto");

		return dto;
	}

	@DeleteMapping("/petteacher_admin_data_forDelete")
	public String petteacherDataForDelete(HttpServletRequest request, Model model) {
		model.addAttribute("request", request);
		adminServiceInterface = new AdminPetteacherDeleteService(adminDao);
		adminServiceInterface.execute(model);

		return "{\"status\": \"success\"}";
	}

	@PostMapping("/petteacher_admin_data_forWrite")
	public String petteacherDataForWrite(@RequestBody PetteacherDto dto, Model model) {
		model.addAttribute("dto", dto);
		adminServiceInterface = new AdminPetteacherWriteService(adminDao);
		adminServiceInterface.execute(model);

		return "{\"status\": \"success\"}";
	}

	@PutMapping("/petteacher_admin_data_forEdit")
	public String petteacherDataForEdit(@RequestBody PetteacherDto dto, HttpServletRequest request, Model model) {
		model.addAttribute("request", request);
		model.addAttribute("dto", dto);
		adminServiceInterface = new AdminPetteacherEditService(adminDao);
		adminServiceInterface.execute(model);

		return "{\"status\": \"success\"}";
	}

	@GetMapping("/pethotel_intro_data")
	public PethotelIntroDto pethotelIntroData(Model model) {
		adminServiceInterface = new AdminPethotelIntroData(adminDao);
		adminServiceInterface.execute(model);
		PethotelIntroDto introDto = (PethotelIntroDto) model.getAttribute("dto");
		return introDto;
	}

	@GetMapping("/pethotel_info_data")
	public PethotelInfoDto pethotelInfoData(Model model) {
		adminServiceInterface = new AdminPethotelInfoData(adminDao);
		adminServiceInterface.execute(model);
		PethotelInfoDto infoDto = (PethotelInfoDto) model.getAttribute("dto");
		return infoDto;
	}

	@PutMapping("/pethotel_admin_intro_dataForEdit")
	public String pethotelIntroForEdit(@RequestBody PethotelIntroDto dto, HttpServletRequest request, Model model) {
		model.addAttribute("request", request);
		model.addAttribute("dto", dto);
		adminServiceInterface = new AdminPethotelIntroEditService(adminDao);
		adminServiceInterface.execute(model);

		return "{\"status\": \"success\"}";
	}

	@PutMapping("/pethotel_admin_info_dataForEdit")
	public String pethotelInfoForEdit(@RequestBody PethotelInfoDto dto, HttpServletRequest request, Model model) {
		model.addAttribute("request", request);
		model.addAttribute("dto", dto);
		adminServiceInterface = new AdminPethotelInfoEditService(adminDao);
		adminServiceInterface.execute(model);

		return "{\"status\": \"success\"}";
	}

	@GetMapping("/notice_notice_list")
	public ArrayList<NoticeDto> noticeNoticeList() {
		ArrayList<NoticeDto> noticeList = noticeDao.noticeAdminList();
		return noticeList;
	}

	@GetMapping("/notice_event_list")
	public ArrayList<EventDto> noticeEventList() {
		ArrayList<EventDto> eventList = noticeDao.eventAdminList();
		return eventList;
	}

	// 공지사항 삭제 메서드
	@DeleteMapping("/deleteNotice")
	public ResponseEntity<String> deleteNotice(@RequestParam("id") Long noticeNo) {
		try {
			int isDeleted = noticeDao.deleteNotice(noticeNo);
			if (isDeleted > 0) {
				return ResponseEntity.ok("Notice deleted successfully.");
			} else {
				return ResponseEntity.status(404).body("Notice not found.");
			}
		} catch (Exception e) {
			return ResponseEntity.status(500).body("An error occurred while deleting the notice.");
		}
	}

	@PostMapping("/community")
	public ResponseEntity<Map<String, String>> communityList(@RequestBody ACommunityDto communityDto, Model model) {
		System.out.println("communityList");

		model.addAttribute("board_no", communityDto.getBoard_no());
		System.out.println("communityDto.getBoard_no() " + communityDto.getBoard_no());

		adminServiceInterface = new AdminCommunityBListService(CommuntiyDao);
		adminServiceInterface.execute(model);

		Map<String, String> response = new HashMap<>();
		return ResponseEntity.ok(response);
	}
}
