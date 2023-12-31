package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Integer> {
	@Query("select c from Complaint c where c.product.seller.sellerId = :sId")
	List<Complaint> findAllBySellerId(@Param("sId") int sellerId);
}
