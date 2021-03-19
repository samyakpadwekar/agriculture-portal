package com.app.service;

import java.util.List;

import com.app.dto.SalesReportDTO;

public interface IOrderService {
	String cartCheckout(Integer userId);
	List<SalesReportDTO> generateSalesReport();
	String confirmOrder(Integer orderId);
	String cancelOrder(Integer orderId);
}
